from sqlmodel import SQLModel
from datetime import datetime

class DonacionCreate(SQLModel):
    nombre: str
    apellido: str
    documento_identidad: str
    telefono: str | None = None
    correo: str | None = None
    monto: float
    acepta_terminos: bool

class DonacionRead(DonacionCreate):
    id: int
    fecha_donacion: datetime
