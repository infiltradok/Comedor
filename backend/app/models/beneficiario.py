from sqlmodel import SQLModel, Field
from typing import Optional

class Beneficiario(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre: str
    apellido: str
    dni: str
    edad: int
    direccion: str
