from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from app.db import engine
from app.models.beneficiario import Beneficiario
from app.schemas.beneficiario import BeneficiarioCreate

router = APIRouter()

@router.post("/")
def crear_beneficiario(data: BeneficiarioCreate):
    with Session(engine) as session:
        nuevo = Beneficiario(**data.dict())
        session.add(nuevo)
        session.commit()
        session.refresh(nuevo)
        return nuevo

@router.get("/")
def obtener_beneficiarios():
    with Session(engine) as session:
        query = select(Beneficiario)
        return session.exec(query).all()
