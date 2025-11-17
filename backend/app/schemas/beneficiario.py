from sqlmodel import SQLModel
from typing import Optional

class BeneficiarioCreate(SQLModel):
    nombre: str
    apellido: str
    dni: str
    direccion: str
    telefono: str

class BeneficiarioRead(BeneficiarioCreate):
    id: int
