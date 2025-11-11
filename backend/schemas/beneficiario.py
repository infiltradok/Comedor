from pydantic import BaseModel

class BeneficiarioCreate(BaseModel):
    nombre: str
    DNI: str
    edad: int
    direccion: str