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

@router.get("/")
def listar_beneficiarios():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, nombre, DNI, edad, direccion FROM Beneficiarios")
    rows = cursor.fetchall()
    beneficiarios = []
    for row in rows:
        beneficiarios.append({
            "id": row[0],
            "nombre": row[1],
            "DNI": row[2],
            "edad": row[3],
            "direccion": row[4]
        })
    return beneficiarios

@router.post("/")
def crear_beneficiario(data: BeneficiarioCreate):
    conn = get_connection()
    cursor = conn.cursor()

    # Verificar si el DNI ya existe
    cursor.execute("SELECT COUNT(*) FROM Beneficiarios WHERE DNI = ?", data.DNI)
    if cursor.fetchone()[0] > 0:
        return {"error": "Ya existe un beneficiario con ese DNI"}

    # Insertar nuevo beneficiario
    cursor.execute("""
        INSERT INTO Beneficiarios (nombre, DNI, edad, direccion)
        VALUES (?, ?, ?, ?)
    """, data.nombre, data.DNI, data.edad, data.direccion)
    conn.commit()
    return {"mensaje": "Beneficiario registrado correctamente"}