from sqlalchemy import Column, Integer, String, Float
from db import Base

class Beneficiario(Base):
    __tablename__ = "beneficiarios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    edad = Column(Integer)
    miembros = Column(Integer)
    racion_por_persona = Column(Float)