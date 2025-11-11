from fastapi import APIRouter
from ..schemas.beneficiario import BeneficiarioCreate, BeneficiarioOut
from ..db import get_connection
from typing import List

router = APIRouter(
    prefix="/beneficiarios",
    tags=["Beneficiarios"]
)

@router.get("/", response_model=List[BeneficiarioOut])
def listar_beneficiarios():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, nombre, DNI, edad, direccion FROM Beneficiarios")
    rows = cursor.fetchall()
    conn.close()

    return [
        BeneficiarioOut(
            id=row[0],
            nombre=row[1],
            DNI=row[2],
            edad=row[3],
            direccion=row[4]
        )
        for row in rows
    ]

@router.post("/", response_model=dict)
def crear_beneficiario(data: BeneficiarioCreate):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM Beneficiarios WHERE DNI = ?", data.DNI)
    if cursor.fetchone()[0] > 0:
        conn.close()
        return {"error": "Ya existe un beneficiario con ese DNI"}

    cursor.execute("""
        INSERT INTO Beneficiarios (nombre, DNI, edad, direccion)
        VALUES (?, ?, ?, ?)
    """, data.nombre, data.DNI, data.edad, data.direccion)
    conn.commit()
    conn.close()
    return {"mensaje": "Beneficiario registrado correctamente"}