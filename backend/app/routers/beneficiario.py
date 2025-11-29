from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from app.db import engine
from app.models.beneficiario import Beneficiario
from app.schemas.beneficiario import BeneficiarioCreate, BeneficiarioRead

router = APIRouter(prefix="/beneficiarios", tags=["Beneficiarios"])

@router.post("/", response_model=BeneficiarioRead)
def crear_beneficiario(data: BeneficiarioCreate):
    with Session(engine) as session:
        nuevo = Beneficiario(**data.dict())
        session.add(nuevo)
        session.commit()
        session.refresh(nuevo)
        return nuevo

@router.get("/", response_model=list[BeneficiarioRead])
def listar_beneficiarios():
    with Session(engine) as session:
        consulta = select(Beneficiario)
        return session.exec(consulta).all()
