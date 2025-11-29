from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class Donacion(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre: str
    apellido: str
    documento_identidad: str
    telefono: Optional[str] = None
    correo: Optional[str] = None
    monto: float
    acepta_terminos: bool
    fecha_donacion: datetime = Field(default_factory=datetime.utcnow)
