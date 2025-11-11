from pydantic import BaseModel, Field

class BeneficiarioCreate(BaseModel):
    nombre: str = Field(..., min_length=1)
    DNI: str = Field(..., min_length=8, max_length=8)
    edad: int = Field(..., gt=0)
    direccion: str = Field(..., min_length=1)

class BeneficiarioOut(BaseModel):
    id: int
    nombre: str
    DNI: str
    edad: int
    direccion: str