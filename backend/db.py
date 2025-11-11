import pyodbc

def get_connection():
    conn = pyodbc.connect(
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost;"
        "DATABASE=ComedorDB;"
        "UID=tu_usuario;"
        "PWD=tu_contraseña;"
    )
    return conn