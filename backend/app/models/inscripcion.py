from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class Inscripcion(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre_completo: str
    correo: str
    telefono: Optional[str]
    tipo_solicitante: Optional[str]
    descripcion: Optional[str]
    fecha_inscripcion: Optional[datetime] = Field(default=None)
