from sqlmodel import SQLModel, create_engine

DATABASE_URL = "mssql+pyodbc://LAPTOP-SJ7OQ90B\\SQLEXPRESS/ComedorDB?driver=ODBC+Driver+17+for+SQL+Server"

engine = create_engine(DATABASE_URL, echo=True)

def crear_tablas():
    SQLModel.metadata.create_all(engine)
    