from fastapi import FastAPI
from app.db import crear_tablas
from app.routers import beneficiario

app = FastAPI()

@app.on_event("startup")
def startup():
    crear_tablas()

app.include_router(beneficiario.router)

@app.get("/")
def inicio():
    return {"mensaje": "API del Comedor funcionando correctamente"}
