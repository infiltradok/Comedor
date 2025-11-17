from sqlmodel import SQLModel, Field
from typing import Optional

from sqlmodel import SQLModel, Field

class Beneficiario(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    nombre: str
    apellido: str
    dni: str
