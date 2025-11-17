from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from app.db import engine
from app.models.beneficiario import Beneficiario
from app.schemas.beneficiario import BeneficiarioCreate, BeneficiarioRead

router = APIRouter(prefix="/beneficiarios", tags=["Beneficiarios"])

# Crear beneficiario
@router.post("/", response_model=BeneficiarioRead)
def crear_beneficiario(data: BeneficiarioCreate):
    with Session(engine) as session:
        nuevo = Beneficiario(**data.dict())
        session.add(nuevo)
        session.commit()
        session.refresh(nuevo)
        return nuevo

# Listar todos
@router.get("/", response_model=list[BeneficiarioRead])
def listar_beneficiarios():
    with Session(engine) as session:
        consulta = select(Beneficiario)
        resultado = session.exec(consulta).all()
        return resultado

# Obtener uno
@router.get("/{beneficiario_id}", response_model=BeneficiarioRead)
def obtener_beneficiario(beneficiario_id: int):
    with Session(engine) as session:
        beneficiario = session.get(Beneficiario, beneficiario_id)
        if not beneficiario:
            raise HTTPException(404, "No encontrado")
        return beneficiario

# Actualizar
@router.put("/{beneficiario_id}", response_model=BeneficiarioRead)
def actualizar_beneficiario(beneficiario_id: int, data: BeneficiarioCreate):
    with Session(engine) as session:
        beneficiario = session.get(Beneficiario, beneficiario_id)
        if not beneficiario:
            raise HTTPException(404, "No encontrado")

        for campo, valor in data.dict().items():
            setattr(beneficiario, campo, valor)

        session.add(beneficiario)
        session.commit()
        session.refresh(beneficiario)
        return beneficiario

# Eliminar
@router.delete("/{beneficiario_id}")
def eliminar_beneficiario(beneficiario_id: int):
    with Session(engine) as session:
        beneficiario = session.get(Beneficiario, beneficiario_id)
        if not beneficiario:
            raise HTTPException(404, "No encontrado")

        session.delete(beneficiario)
        session.commit()
        return {"mensaje": "Eliminado correctamente"}
