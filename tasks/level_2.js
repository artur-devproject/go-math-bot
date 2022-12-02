function getRandomNumber(max) {
    const num = Math.floor(Math.random() * max)
    return num > 0 ? num : getRandomNumber(max)
}

function getRandomSign() {
    const num = getRandomNumber(100)
    if(num < 50) return ' + '
    return ' - '
}

function getEquation() {
    const K = getRandomNumber(10)
    const N = getRandomNumber(10)
    const X = getRandomNumber(10)
    const B = getRandomNumber(100)
    const E = getRandomNumber(5)

    const num = getRandomNumber(100)
    if(num < 25) return {exp: `${K}x + ${B} = ${K * X + B}`, res: X}
    if(num < 50) return {exp: `${K}(${B} - x) = ${K * (B - X)}`, res: X}
    if(num < 75) return {exp: `${K}x - (${N}x - ${B}) = ${K*X - (N*X - B)}`, res: X}
    return {exp: `${B}**${E} - ${K}x = ${B**E - K*X}`, res: X}
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
    
    const exp_1 = `Спортсмен пробежал первый круг за ${M1} мин ${S1} сек,`
        + ` а второй круг за ${M2} мин ${S2} сек. Сколько времени (мин/сек) бежал спортсмен?`
    const exp_2 = `Турист шел в первый день ${H1} ч ${M1} мин,`
        + ` а во второй день - ${H2} ч ${M2} мин. Сколько времени (ч/мин) шел турист?`
    const exp_3 = `Автобус выехал из пункта А в ${H1} ч ${M1} мин,`
        + ` а приехал в пункт Б в ${res_H} ч ${res_M} мин. Сколько времени (ч/мин) ехал автобус?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: res_MS}
    if(num < 66) return {exp: exp_2, res: res_HM}
    return {exp: exp_3, res: H2 + '/' + M2}
}

function getWeightTask() {
    const G1 = getRandomNumber(100)
    const KG1 = getRandomNumber(100)
    const T1 = getRandomNumber(10)
    const G2 = getRandomNumber(100)
    const KG2 = getRandomNumber(100)
    const T2 = getRandomNumber(10)
    const N = getRandomNumber(5)
    const P = getRandomNumber(10) * 10

    const GKG_sum = (KG1 * 1000 + G1 * 10) + (KG2 * 1000 + G2 * 10)
    const TKG_diff = (T1 * 1000 + KG1 * 10) - (T2 * 1000 + KG2 * 10)

    const res_1 = ((G1 * 10) + (G1 * 10 * (P / 100))) / 2
    const res_2 = Math.floor(Math.abs(TKG_diff) / 1000)
        + '/' + Math.floor(Math.abs(TKG_diff) % 1000)
    const res_3 = KG1 + N * KG1 + Math.floor(((G1 + N * G1) * 10) / 1000) 
        + '/' + Math.floor(((G1 + N * G1) * 10) % 1000)
    const res_4 = ((KG1 * 10) + (KG1 * 10 * (1 + P / 100))) / 2

    const exp_1 = `Один пирог весит ${G1 * 10} г,`
        + ` а вес второго пирога составляет ${P} % от первого. Какой средний вес (г) одного пирога?`
    const exp_2 = `Первый автомобиль весит ${T1} т ${KG1 * 10} кг,`
        + ` а второй автомобиль - ${T2} т ${KG2 * 10} кг. Какая разница в массе автомобилей (т/кг)?`
    const exp_3 = `В первом ящике ${KG1} кг ${G1 * 10} г яблок,`
        + ` а во втором ящике - в ${N} больше. Сколько яблок (кг/г) в двух ящиках?`
    const exp_4 = `Один камень весит ${KG1*10} кг,`
        + ` а второй камень - на ${P} % больше. Какой средний вес (кг) одного камня?`

    const num = getRandomNumber(100)
    if(num < 25) return {exp: exp_1, res: res_1}
    if(num < 50) return {exp: exp_2, res: res_2}
    if(num < 75) return {exp: exp_3, res: res_3}
    return {exp: exp_4, res: res_4}
}

function getLengthTask() {
    const MM = getRandomNumber(10) * 10
    const SM = getRandomNumber(10) * 100
    const M = getRandomNumber(10) * 10
    const KM = getRandomNumber(10) / 10
    const A = getRandomNumber(6)
    const B1 = getRandomNumber(10)
    const B2 = getRandomNumber(10)

    const res_1 = Math.floor((KM) * (1 * A + (B1) + (B2)) * 1000)
    const res_2 = Number(((MM) * (2 * A + (B1)) / 10).toFixed(1))
    const res_3 = Number(((SM) * (2 * A + (B1)) / (2 * 100)).toFixed(2))

    const exp_1 = `Длина одной улицы ${KM*A} км, длина второй улицы составляет ${B1}/${A} от первой,`
        + ` а третьей - ${B2}/${A} от первой. Какова общая длина улиц (м)?`
    const exp_2 = `Длина одной ленты ${MM*A} мм, длина второй ленты на ${B1}/${A} больше первой.`
        + ` Какова общая длина лент (см)?`
    const exp_3 = `Высота первого дерева составляет ${SM*A} см, высота второго - на ${B1}/${A} больше первого.`
        + ` Какова средняя высота одного дерева (м)?`

    const num = getRandomNumber(100)
    if(num < 33) return {exp: exp_1, res: res_1}
    if(num < 66) return {exp: exp_2, res: res_2}
    return {exp: exp_3, res: res_3}
}

function getSizesTask() {
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

function getRandomTask() {
    const num = getRandomNumber(100)
    if(num < 20) return getSizesTask()
    if(num < 35) return getPriceTask()
    if(num < 50) return getTimeTask()
    if(num < 65) return getWeightTask()
    if(num < 80) return getLengthTask()
    if(num < 90) return getSpeedTask()
    return getEquation()
}

module.exports = {getRandomTask, getRandomNumber}