export const Current = 3.412;
export const Voltage = 10;
export const PI = 3.14159;

export function getResistance(){
    return Voltage/Current;
}

export function getCircumference(radius){
  return 2 * PI * radius
}

export function getArea(raduis){
  return PI * raduis * raduis
}

export function getVolume(raduis){
  return 4/3 * PI * raduis * raduis * raduis
}
