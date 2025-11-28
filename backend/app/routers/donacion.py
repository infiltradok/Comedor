from fastapi import APIRouter
from sqlmodel import Session, select
from app.db import engine
from app.models.donacion import Donacion
from app.schemas.donacion import DonacionCreate, DonacionRead

router = APIRouter(prefix="/donaciones", tags=["Donaciones"])

@router.post("/", response_model=DonacionRead)
def crear_donacion(data: DonacionCreate):
    with Session(engine) as session:
        nueva = Donacion(**data.dict())
        session.add(nueva)
        session.commit()
        session.refresh(nueva)
        return nueva

@router.get("/", response_model=list[DonacionRead])
def listar_donaciones():
    with Session(engine) as session:
        return session.exec(select(Donacion)).all()
