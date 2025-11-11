from fastapi import FastAPI
from backend.routers import beneficiarios  # ← si usas `uvicorn backend.main:app`

app = FastAPI()

app.include_router(beneficiarios.router)

@app.get("/")
def read_root():
    return {"mensaje": "¡Hola desde FastAPI en Comedor!"}