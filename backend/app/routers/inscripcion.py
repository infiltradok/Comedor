from fastapi import APIRouter
from sqlmodel import Session, select
from app.db import engine
from app.models.inscripcion import Inscripcion
from app.schemas.inscripcion import InscripcionCreate, InscripcionRead

router = APIRouter(prefix="/inscripciones", tags=["Inscripciones"])

@router.post("/", response_model=InscripcionRead)
def crear_inscripcion(data: InscripcionCreate):
    with Session(engine) as session:
        nueva = Inscripcion(**data.dict())
        session.add(nueva)
        session.commit()
        session.refresh(nueva)
        return nueva

@router.get("/", response_model=list[InscripcionRead])
def listar_inscripciones():
    with Session(engine) as session:
        return session.exec(select(Inscripcion)).all()
