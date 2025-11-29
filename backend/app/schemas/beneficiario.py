from sqlmodel import SQLModel

class BeneficiarioCreate(SQLModel):
    nombre: str
    apellido: str
    dni: str
    edad: int
    direccion: str

class BeneficiarioRead(BeneficiarioCreate):
    id: int
