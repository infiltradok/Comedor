from fastapi import APIRouter
from ..schemas.beneficiario import BeneficiarioCreate
from ..db import get_connection

router = APIRouter(
    prefix="/beneficiarios",
    tags=["Beneficiarios"]
)

@router.post("/")
def crear_beneficiario(data: BeneficiarioCreate):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO Beneficiarios (nombre, DNI, edad, direccion)
        VALUES (?, ?, ?, ?)
    """, data.nombre, data.DNI, data.edad, data.direccion)
    conn.commit()
    return {"mensaje": "Beneficiario registrado correctamente"}