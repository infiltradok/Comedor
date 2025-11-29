from sqlmodel import SQLModel
from typing import Optional
from datetime import datetime

class InscripcionCreate(SQLModel):
    nombre_completo: str
    correo: str
    telefono: Optional[str]
    tipo_solicitante: Optional[str]
    descripcion: Optional[str]

class InscripcionRead(InscripcionCreate):
    id: int
    fecha_inscripcion: Optional[datetime]
