from fastapi import FastAPI
from app.db import crear_tablas
from app.routers.beneficiario import router as beneficiario_router

app = FastAPI()

@app.on_event("startup")
def startup_event():
    crear_tablas()

# Registrar routers
app.include_router(beneficiario_router, prefix="/beneficiarios", tags=["Beneficiarios"])

@app.get("/")
def root():
    return {"message": "API del Comedor funcionando correctamente"}
