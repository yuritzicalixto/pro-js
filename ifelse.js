// Reglas de práctica:
// 1.	Tu código
// 2.	Tu lógica en 3–6 líneas (qué condiciones evaluaste y por qué)
// 3.	2–3 casos de prueba (input → output esperado)





// Nivel 1 — Fundamentos (1–15)
// Enfócate en condiciones simples, if y if...else.
// 1.	Dado un número, imprime “Positivo” si es mayor a 0; si no, imprime “No positivo”.
let n=-6;

if (n>1) {
    console.log("Positivo");
    
} else {
    console.log("No positivo");
    
}
// 2.	Dado un número, imprime “Par” si es divisible entre 2; si no, “Impar”.
let num=8;
if (num%2===0) {
    console.log("Par");
    
} else {
    console.log("Impar");
    
}
// 3.	Dada una edad, imprime “Mayor de edad” si es ≥ 18; si no, “Menor de edad”.
// 4.	Dada una calificación (0–10), imprime “Aprobado” si es ≥ 6; si no, “Reprobado”.
// 5.	Dada una temperatura, imprime “Frío” si es < 15; si no, “No frío”.
// 6.	Dado un número, imprime “Múltiplo de 5” si lo es; si no, “No múltiplo de 5”.
// 7.	Dadas dos cadenas, imprime “Iguales” si son idénticas; si no, “Diferentes”.
// 8.	Dado un carácter, imprime “Vocal” si es una vocal; si no, “No vocal”.
// 9.	Dado un número, imprime “Cero” si es 0; si no, “No cero”.
// 10.	Dado un precio, si es > 1000 imprime “Envío gratis”; si no, “Envío con costo”.
// 11.	Dado un número, si es ≥ 100 imprime “Tres dígitos o más”; si no, “Menos de tres dígitos”.
// 12.	Dado un año, imprime “Siglo XXI” si es ≥ 2001; si no, “No siglo XXI”.
// 13.	Dado un número, si es < 0 imprime “Negativo”; si no, imprime “No negativo”.
// 14.	Dado un username, si es "admin" imprime “Acceso total”; si no, “Acceso limitado”.
// 15.	Dado un booleano isMember, si es true imprime “Miembro”; si no, “No miembro”.
// ________________________________________
// Nivel 2 — Comparaciones y rangos cortos (16–30)
// Usa if...else y empieza a pensar en rango con dos condiciones.
// 16.	Dado un número, imprime si está entre 10 y 20 inclusive; si no, imprime que está fuera.
// 17.	Dada una edad, imprime “Niñez” si < 12; si no, “No niñez”.
// 18.	Dado un número, imprime “A” si es ≥ 50; si no, “B”.
// 19.	Dadas dos edades, imprime “Misma edad” si son iguales; si no, “Edades distintas”.
// 20.	Dado un salario, aplica un bono: si es < 8000, imprime salario + 500, si no, imprime salario.
// 21.	Dado un número, imprime “Divisible por 3” o “No divisible por 3”.
// 22.	Dado un número, imprime “Entre -5 y 5” o “Fuera de rango”.
// 23.	Dado un total de compra, si es ≥ 2000 aplica 10% descuento; si no, no aplica. Imprime total final.
// 24.	Dado un string, si su longitud es ≥ 8 imprime “Fuerte”, si no “Débil” (simulación de password).
// 25.	Dado un número, si es entero (sin decimales) imprime “Entero”; si no, “Decimal”.
// 26.	Dado un día de la semana (1–7), si es 6 o 7 imprime “Fin de semana”; si no, “Entre semana”.
// 27.	Dada una hora (0–23), si está entre 6 y 11 imprime “Mañana”; si no, “No mañana”.
// 28.	Dado un string, si está vacío imprime “Vacío”; si no, “Con contenido”.
// 29.	Dado un número, si es > 100 y par imprime “Grande y par”; si no, “No cumple”.
// 30.	Dado un número, si es < 0 o > 100 imprime “Fuera de 0–100”; si no, “Dentro”.
// ________________________________________
// Nivel 3 — else if básico (31–45)
// Empieza la clasificación por categorías.
// 31.	Calificación (0–10): imprime “Excelente” (9–10), “Bien” (7–8), “Suficiente” (6), “Reprobado” (0–5).
// 32.	Temperatura: “Frío” (< 15), “Templado” (15–25), “Calor” (> 25).
// 33.	Edad: “Niñez” (0–11), “Adolescencia” (12–17), “Adulto” (18–64), “Adulto mayor” (65+).
// 34.	Número: imprime “Negativo”, “Cero” o “Positivo”.
// 35.	Semáforo ("rojo", "amarillo", "verde"): imprime acción correspondiente.
// 36.	Día (1–7): imprime nombre del día.
// 37.	Mes (1–12): imprime el nombre del mes.
// 38.	Compra: si total < 500 sin descuento, 500–999 5%, 1000–1999 10%, 2000+ 15%. Imprime total final.
// 39.	IMC (usa valor dado ya calculado): bajo (<18.5), normal (18.5–24.9), sobrepeso (25–29.9), obesidad (30+).
// 40.	Tipo de triángulo por lados (tres números): equilátero, isósceles, escaleno (asume que sí forma triángulo).
// 41.	Velocidad: “Lento” (<40), “Moderado” (40–80), “Rápido” (>80).
// 42.	Puntos de experiencia: “Novato” (<100), “Intermedio” (100–499), “Avanzado” (500+).
// 43.	Edad para boleto: niño (<12), estudiante (12–22), adulto (23–59), senior (60+).
// 44.	Letra: si es vocal, imprime “Vocal”; si es consonante, “Consonante”; si no es letra, “No letra”.
// 45.	Hora: “Madrugada” (0–5), “Mañana” (6–11), “Tarde” (12–18), “Noche” (19–23).
// ________________________________________
// Nivel 4 — Condiciones compuestas y validación (46–60)
// Aquí importan los bordes, rangos, combinaciones con && y ||.
// 46.	Validar calificación: si está fuera de 0–10 imprime “Inválida”; si no, clasifica aprobado/reprobado.
// 47.	Validar edad: si es negativa imprime “Inválida”; si no, clasifica mayor/menor.
// 48.	Dado un número, imprime “Múltiplo de 2 y 3” si cumple ambos; si no, indica que no.
// 49.	Dado un número, imprime “Múltiplo de 2 o 5” si cumple alguno; si no, no.
// 50.	Usuario y contraseña: si usuario es "admin" y pass es "1234" imprime “Acceso”; si no, “Denegado”.
// 51.	String: si tiene longitud 0 imprime “Vacío”; si tiene 1–5 “Corto”; 6–10 “Medio”; 11+ “Largo”.
// 52.	Año: valida que sea entero y > 0; luego determina si es bisiesto (regla estándar).
// 53.	Tres números: imprime el mayor (sin usar Math.max).
// 54.	Tres números: imprime el menor (sin usar Math.min).
// 55.	Dos números: si el segundo es 0 imprime “No se puede dividir”; si no, imprime división.
// 56.	Validar email simple: debe contener @ y un . después del @ (validación básica, no perfecta).
// 57.	Determina si un carácter es mayúscula, minúscula o no letra.
// 58.	Si una compra tiene cupón y el total ≥ 1000, aplica 20%; si tiene cupón y total < 1000 aplica 10%; si no tiene cupón, 0%.
// 59.	Dado un número, si está en [1,100] y es impar, imprime “Válido”; si no, “No válido”.
// 60.	Determina si un año está en el siglo XX (1901–2000), XXI (2001–2100) o fuera.
// ________________________________________
// Nivel 5 — Casos tipo “reglas de negocio” (61–75)
// Ejercicios más realistas: tarifas, reglas, excepciones.
// 61.	Tarifa de estacionamiento por horas: 1–2 hrs $20/hr; 3–5 hrs $15/hr; 6+ hrs $10/hr. Calcula total.
// 62.	Envío: si zona es “local” $50, “nacional” $120, “internacional” $350; si compra ≥ 2000, envío gratis excepto internacional.
// 63.	Comisión de ventas: <5000 3%, 5000–14999 5%, 15000+ 8%. Calcula comisión.
// 64.	Banco: si saldo < 0, imprime “Cuenta en sobregiro”; si 0–999 “Saldo bajo”; 1000+ “Saldo saludable”.
// 65.	Validación de username: debe tener ≥ 4 caracteres y no contener espacios; si no, inválido.
// 66.	Validación de password: ≥ 8, debe incluir al menos un número (validación simple).
// 67.	Suscripción: “free” no acceso a premium; “pro” acceso; “enterprise” acceso + soporte. Imprime permisos.
// 68.	Nota final: si faltas > 3, reprueba automático; si no, evalúa calificación.
// 69.	Cine: si día es miércoles, 2x1; si no, precio normal. Calcula precio para N boletos.
// 70.	Impuestos: si ingreso mensual < 10000 tasa 0%, 10000–29999 10%, 30000+ 20%. Calcula impuesto.
// 71.	Tienda: si producto es “A” y cantidad ≥ 10, 12% descuento; si producto “B” y cantidad ≥ 5, 8%; si no, 0%.
// 72.	Paquetería: si peso ≤ 1kg $80; ≤ 5kg $150; >5kg $300; si es “express” suma $70.
// 73.	Validar fecha simple: día 1–31, mes 1–12, año >0 (sin considerar meses de 30/31).
// 74.	Clasifica número: “Perfecto para promo” si es par y múltiplo de 10; “Casi” si solo es par; si no, “No aplica”.
// 75.	Determina si una persona puede rentar auto: edad ≥ 21 y licencia=true; si edad 18–20 y licencia=true, “solo con cargo extra”; si no, “no puede”.
// ________________________________________
// Nivel 6 — Lógica más densa (76–90)
// Más condiciones, más caminos, más atención a casos límite.
// 76.	Clasifica triángulo validando primero si puede existir (desigualdad triangular), si no, “No es triángulo”.
// 77.	Calcula tarifa eléctrica: primeros 100 kWh a $1, siguientes 200 a $1.5, resto a $2. Total.
// 78.	Evaluación de crédito: si ingreso ≥ 20000 y historial “bueno” aprueba; si ingreso ≥ 30000 y historial “regular” aprueba; si historial “malo” rechaza.
// 79.	Determina si un número es “casi primo”: si es divisible por exactamente dos números (1 y sí mismo) → primo; si no, no primo (sin loops: solo para números hasta 10 usando condiciones).
// 80.	Clasifica string: si empieza con “A” imprime “A-Start”; si termina con “Z” imprime “Z-End”; si cumple ambos, prioridad a “Ambos”.
// 81.	Precio de boleto de avión: base 3000; si temporada “alta” +25%; si equipaje extra +400; si asiento premium +600. Total.
// 82.	Determina compatibilidad de horario: si hora está entre 9–17 y día no es sábado/domingo → “Horario laboral”; si no, “Fuera”.
// 83.	Valida número telefónico simple: debe ser string de 10 dígitos, sin letras, sin espacios.
// 84.	Clasifica velocidad en km/h y tipo de vía (“urbana”/“carretera”): imprime si excede límite (urbana 60, carretera 110).
// 85.	Precio por membresía gym: inscripción 500 (solo si es “nuevo”); mensualidad 400; si paga anual, 20% descuento sobre mensualidades.
// 86.	Calcula propina: si servicio “excelente” 15%, “bueno” 10%, “regular” 5%, “malo” 0%.
// 87.	Control de acceso: si rol “admin” acceso total; si “editor” acceso edición; si “viewer” solo lectura; si desconocido, denegar.
// 88.	Determina si un color está en paleta permitida (lista fija de 5 colores) y si no, rechaza.
// 89.	Determina si un número está más cerca de 0, de 100, o equidistante (distancias absolutas).
// 90.	Calcula costo de paquetería con seguro: si valor declarado > 5000, seguro obligatorio 2% del valor; si no, opcional (si usuario lo activa).
// ________________________________________
// Nivel 7 — Retos tipo entrevista (91–100)
// Más diseño lógico: claridad, orden, manejo de casos “raros”.
// 91.	“FizzBuzz sin loops”: dado un número, imprime “Fizz” (múltiplo 3), “Buzz” (múltiplo 5), “FizzBuzz” (ambos) o el número.
// 92.	Dadas dos horas (inicio/fin) en 0–23, determina si el intervalo cruza medianoche.
// 93.	Determina si una contraseña es aceptable: ≥ 8, tiene número y tiene mayúscula (validación simple).
// 94.	Normaliza un puntaje: si está fuera de 0–100, marca inválido; si 90–100 A; 80–89 B; 70–79 C; 60–69 D; <60 F.
// 95.	Dado un monto y un método de pago (“efectivo”, “tarjeta”, “transferencia”), aplica comisión: tarjeta 3%, transferencia 1%, efectivo 0%.
// 96.	Dado un número, decide si “conviene” redondearlo: si está a ≤ 0.2 de un entero, imprime “Redondear”; si no, “No”.
// 97.	Determina si un usuario puede publicar: debe estar verificado o tener antigüedad ≥ 30 días; además no debe estar baneado.
// 98.	Valida un código postal México (simplificado): debe ser 5 dígitos y no iniciar con 0 (regla simplificada para práctica).
// 99.	Dado un string, decide si es “palabra” válida: solo letras (a-z, A-Z), sin espacios, longitud 2–20.
// 100.	Sistema de alertas: si temperatura > 60 o presión > 120 → “ALERTA ROJA”; si temperatura 50–60 o presión 100–120 → “ALERTA AMARILLA”; si no → “OK”.
