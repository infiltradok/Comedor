from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import crear_tablas
from app.routers import beneficiario

app = FastAPI()

# 🔥 CONFIGURACIÓN CORS (OBLIGATORIO PARA ANGULAR)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    crear_tablas()

app.include_router(beneficiario.router)

@app.get("/")
def inicio():
    return {"mensaje": "API del Comedor funcionando correctamente"}


from app.routers import beneficiario, donacion

app.include_router(beneficiario.router)
app.include_router(donacion.router)


from app.routers import inscripcion
app.include_router(inscripcion.router)
