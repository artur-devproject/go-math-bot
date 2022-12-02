const config = require('../config')

function getRandomNumber(max) {
    const num = Math.floor(Math.random() * max)
    return num > 0 ? num : getRandomNumber(max)
}

function getRandomSign() {
    const num = getRandomNumber(100)
    if(num < 50) return ' + '
    return ' - '
}

function getUnitTask() {
    const A1 = getRandomNumber(100) * 10
    const B1 = getRandomNumber(10)
    const A2 = getRandomNumber(100) * 10
    const B2 = getRandomNumber(10)
    const N = getRandomNumber(5) + 1

    const AB_sum = (B1 * 1000 + A1) + (B2 * 1000 + A2)
    const AB_N = (B1 * 1000 + A1) * N

    const res_1 = Math.floor(AB_sum / 1000)
        + '/' + Math.floor(AB_sum % 1000)
    const res_2 = B1 + '/' + A1
    const res_3 = Math.floor(AB_N / 1000) 
        + '/' + Math.floor(AB_N % 1000)
    const res_4 = B1 + '/' + A1
    const res_5 = B1 + '/' + A1
    const res_6 = Math.floor(AB_sum / 1000)
        + '/' + Math.floor(AB_sum % 1000)

    const exp_1 = `Один камень весит ${B1} кг ${A1} г,`
        + ` а второй - ${B2} кг ${A2} г. Найдите общий вес (кг/г) камней?`
    const exp_2 = `Первый автомобиль весит ${Math.floor(AB_sum / 1000)} т ${Math.floor(AB_sum % 1000)} кг,`
        + ` а второй автомобиль - ${B2} т ${A2} кг. Какая разница в массе автомобилей (т/кг)?`
    const exp_3 = `В первом ящике ${B1} кг ${A1} г яблок,`
        + ` а во втором ящике - в ${N} раз(а) больше. Сколько яблок (кг/г) во втором ящике?`
    const exp_4 = `Длина одной реки ${Math.floor(AB_N / 1000)} км ${Math.floor(AB_N % 1000)} м,`
        + ` а второй - в ${N} раз(а) меньше. Найдите длину (км/м) второй реки?`
    const exp_5 = `Высота первого этажа ${Math.floor(AB_sum / 1000)} м ${Math.floor(AB_sum % 1000)} мм,`
        + ` а второго - на ${B2} м ${A2} мм меньше. Какая высота (м/мм) второго этажа?`
    const exp_6 = `Длина одной дороги ${B1} км ${A1} м,`
        + ` а второй - на ${B2} км ${A2} м больше. Какая длина (км/м) второй дороги?`

    const num = getRandomNumber(100)
    if(num < 17) return {exp: exp_1, res: res_1}
    if(num < 34) return {exp: exp_2, res: res_2}
    if(num < 51) return {exp: exp_3, res: res_3}
    if(num < 68) return {exp: exp_4, res: res_4}
    if(num < 85) return {exp: exp_5, res: res_5}
    return {exp: exp_6, res: res_6}
}

function getSizeTask() {
    const size = [getRandomNumber(10), getRandomNumber(10), getRandomNumber(10)].sort((a,b) => b - a)
    const length = size[0]
    const width = size[1]
    const heigth = size[2]
    const square = length * width
    const volume = length * width * heigth
    const P = 2 * (length + width)

    const exp_1 = `Длина коробки составляет ${length} дм,` 
        + ` ширина - ${width} дм и высота - ${heigth} дм.`
        + ` Чему равен объем коробки (дм3 или л)?`
    const exp_2 = `Площадь основания коробки составляет ${square} дм2,` 
        + ` ширина - ${width} дм и высота - ${heigth} дм.`
        + ` Чему равен объем коробки (дм3 или л)?`
    const exp_3 = `Длина коробки составляет ${length} дм,` 
        + ` ширина - ${width} дм и высота - ${heigth} дм.`
        + ` Чему равна площадь основания коробки (дм2)?`
    const exp_4 = `Объем коробки составляет ${volume} дм3,` 
        + ` ширина - ${width} дм и высота - ${heigth} дм.`
        + ` Чему равна площадь основания коробки (дм2)?`
    const exp_5 = `Объем коробки составляет ${volume} дм3,` 
        + ` ширина - ${width} дм и высота - ${heigth} дм.`
        + ` Чему равна длина коробки (дм)?`
    const exp_6 = `Площадь основания коробки составляет ${square} дм2,` 
        + ` длина - ${length} дм и высота - ${heigth} дм.`
        + ` Чему равна ширина коробки (дм)?`
    const exp_7 = `Объем коробки составляет ${volume} дм3,` 
        + ` а площадь основания - ${square} дм2.`
        + ` Чему равна высота коробки (дм)?`
    const exp_8 = `Площадь комнаты составляет ${square} м2,` 
        + ` длина - ${length} м и высота - ${heigth} м.`
        + ` Чему равен периметр комнаты (м)?`

    const num = getRandomNumber(100)
    if(num < 12) return {exp: exp_1, res: volume}
    if(num < 24) return {exp: exp_2, res: volume}
    if(num < 36) return {exp: exp_3, res: square}
    if(num < 48) return {exp: exp_4, res: square}
    if(num < 60) return {exp: exp_5, res: length}
    if(num < 72) return {exp: exp_6, res: width}
    if(num < 85) return {exp: exp_7, res: heigth}
    return {exp: exp_8, res: P}
}

function getTimeTask() {
    const S1 = getRandomNumber(60)
    const M1 = getRandomNumber(60)
    const H1 = getRandomNumber(12)
    const S2 = getRandomNumber(60)
    const M2 = getRandomNumber(60)
    const H2 = getRandomNumber(12)

    const res_MS = M1 + M2 + Math.floor((S1 + S2) / 60) + '/' + Math.floor((S1 + S2) % 60)
    const res_H = H1 + H2 + Math.floor((M1 + M2) / 60)
    const res_M = Math.floor((M1 + M2) % 60)
    const res_HM = res_H + '/' + res_M
    
    const exp_1 = `Спортсмен пробежал первую дистанцию за ${M1} мин ${S1} сек,`
        + ` а вторую - за ${M2} мин ${S2} сек. Сколько времени (мин/сек) бежал спортсмен?`
    const exp_2 = `Турист вышел из лагеря в ${H1} ч ${M1} мин`
        + ` и шел до магазина ${H2} ч ${M2} мин. Во сколько (ч/мин) он пришел в магазин?`
    const exp_3 = `Автобус выехал из пункта А в ${H1} ч ${M1} мин,`
        + ` а приехал в пункт Б в ${res_H} ч ${res_M} мин. Сколько времени (ч/мин) ехал автобус?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: res_MS}
    if(num < 66) return {exp: exp_2, res: res_HM}
    return {exp: exp_3, res: H2 + '/' + M2}
}

function getPriceTask() {
    const P1 = getRandomNumber(100) / 10
    const P2 = getRandomNumber(100) / 10
    const P3 = getRandomNumber(100) / 100
    const P4 = getRandomNumber(1000)
    const P5 = getRandomNumber(1000)
    const Q1 = getRandomNumber(10)
    const Q2 = getRandomNumber(10)
    const M = Number(((P4 + P5) * Q1 / 10).toFixed(2))

    const res_1 = Number(((Q1 * P1) + (Q2 * P2)).toFixed(2))
    const res_2 = Number((10 - (Q1 * P3)).toFixed(2))
    const res_3 = Number(((P4 + P5) - M).toFixed(2))

    const exp_1 = `Мальчик купил ${Q1} кг конфет по ${P1.toFixed(2)} евро/кг`
        + ` и ${Q2} кг печенья по ${P2.toFixed(2)} евро/кг. Сколько потратил мальчик?`
    const exp_2 = `Девочка купила карандаши в количестве ${Q1} шт по цене ${P3} евро.`
        + ` Какую сдачу получила девочка с 10 евро?`
    const exp_3 = `Женщина хочет купить новое платье за ${P4} евро и туфли за ${P5} евро.`
        + ` У нее есть всего ${M} евро. Сколько ей не хватает?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: res_1}
    if(num < 66) return {exp: exp_2, res: res_2}
    return {exp: exp_3, res: res_3}
}

function getSpeedTask() {
    const V = getRandomNumber(100)
    const T = getRandomNumber(10)
    const S = V * T

    const exp_1 = `Машина двигалась со скоростью ${V} км/ч в течение ${T} часов.`
        + ` Какое расстояние проехала машина (км)?`
    const exp_2 = `Велосипедист проехал ${S} км со средней скоростью ${V} км/ч.`
        + ` Сколько времени ехал велосипедист (ч)?`
    const exp_3 = `Поезд прошел ${S} км за ${T} ч.`
        + ` С какой скоростью двигался поезд (км/ч)?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: S}
    if(num < 66) return {exp: exp_2, res: T}
    return {exp: exp_3, res: V}
}

function getPercentTask() {
    const A = getRandomNumber(10) * 10
    const P = getRandomNumber(10) * 10
    const AP = A * (1 + P/100)
    const PA = A * P/100

    const exp_1 = `Один ящик весит ${A} кг,`
        + ` а вес второго ящика составляет ${P} % от первого. Сколько весит (кг) второй ящик?`
    const exp_2 = `Высота первого дерева ${A} м,`
        + ` а высота второго дерева на ${P} % больше. Какая высота (м) второго дерева?`
    const exp_3 = `Одна сосиска весит ${A} г,`
        + ` а вторая - ${AP} г. На сколько (%) одна сосиска больше другой?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: PA}
    if(num < 66) return {exp: exp_2, res: AP}
    return {exp: exp_3, res: P}
}

function getMiddleTask() {
    const A = getRandomNumber(10) * 10
    const B = getRandomNumber(10) * 10
    const C = getRandomNumber(10) * 10
    const N = getRandomNumber(10)

    const exp_1 = `Длина одной трубы ${A} м,`
        + ` а второй - ${B} м. Какая средняя длина (м) трубы?`
    const exp_2 = `Один камень весит ${A*3} кг,`
        + ` второй - ${B*3} кг, а третий - ${C*3} кг. Какой средний вес (кг) одного камня?`
    const exp_3 = `Купили помидоры в количестве ${N} шт. Средний вес одного помидора ${A} г.`
        + ` Найдите общий вес (г) помидор?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: (A+B)/2}
    if(num < 66) return {exp: exp_2, res: A+B+C}
    return {exp: exp_3, res: A*N}
}

function getFractionTask() {
    const A = getRandomNumber(10) * 10
    const B = getRandomNumber(10)
    const C = getRandomNumber(10)
    const D = getRandomNumber(6)

    const exp_1 = `Объем первого бака - ${A*B} л,`
        + ` а объем второго бака составляет ${C}/${B} от первого. Какой объем (л) второго бака?`
    const exp_2 = `Глубина одной ямы ${A*B} см,`
        + ` а глубина второй - на ${D}/${B} больше. Какая глубина (см) второй ямы?`

    const num = getRandomNumber(100)
    if(num < 50) return {exp: exp_1, res: A*C}
    return {exp: exp_2, res: A*(B+D)}
}

function getExpression() {
    const K = getRandomNumber(10)
    const N = getRandomNumber(5)
    const X = getRandomNumber(10)
    const B = getRandomNumber(100)
    const sign = getRandomSign()
    const A1 = eval(K * X + sign + B)
    const A2 = eval(B + sign + K * X)
    const C = K * (X + N)
    const F = getRandomNumber(1000)
    const G = getRandomNumber(1000)
    const D = eval(F + sign + G)

    const num = getRandomNumber(100)
    if(num < 40) return {exp: `Вычислите\n${F} ${sign} ${G}`, res: D}
    if(num < 70) return {exp: `Вычислите\n${K} * ${B}`, res: K*B}
    if(num < 85) return {exp: `Вычислите\n${C} / ${K}`, res: X+N} 
    if(num < 90) return {exp: `Найдите Х, если\n${K==1 ? "" : K}x ${sign} ${B} = ${A1}`, res: X}
    if(num < 95) return {exp: `Найдите Х, если\n${B} ${sign} ${K==1 ? "" : K}x = ${A2}`, res: X}
    return {exp: `Чему равно ${X} в степени ${N} ?`, res: X**N}
}

function getRandomTask() {
    const num = getRandomNumber(100)
    if(num < 20) return getUnitTask()
    if(num < 40) return getSizeTask()
    if(num < 50) return getPriceTask()
    if(num < 60) return getTimeTask()
    if(num < 70) return getSpeedTask()
    if(num < 80) return getPercentTask()
    if(num < 90) return getMiddleTask()
    return getFractionTask()
}

function getTask() {
    const num = getRandomNumber(100)
    if(num < config.TASK_SHARE) return getRandomTask()
    return getExpression()
}

module.exports = {getTask, getRandomNumber}