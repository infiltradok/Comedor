from sqlmodel import SQLModel

class BeneficiarioCreate(SQLModel):
    nombre: str
    apellido: str
    dni: str
