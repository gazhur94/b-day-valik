/**
 * КОНФІГУРАЦІЯ ФОТОГРАФІЙ
 * 
 * Як додати свої фото:
 * 1. Додайте фотографії в папку /public/photos/
 * 2. Для кожного кроку можна додати ОДНУ або ДВІ фотографії:
 *    - Якщо ДВІ: "before" (до) та "after" (після) - step1-before.jpg, step1-after.jpg
 *    - Якщо ОДНА: тільки "single" - step1.jpg
 * 
 * Рекомендований розмір фото: 600x800px (співвідношення 3:4)
 * Формати: .jpg, .png, .webp
 */

export interface PhotoData {
  src: string
  alt: string
}

// Тип для кроку з двома фотографіями (до/після)
export interface BeforeAfterPhoto {
  type: "beforeAfter"
  before: PhotoData
  after: PhotoData
}

// Тип для кроку з однією фотографією
export interface SinglePhoto {
  type: "single"
  photo: PhotoData
}

export type StepPhoto = BeforeAfterPhoto | SinglePhoto

export const PHOTOS: Record<string, StepPhoto> = {
  // Сторінка 3: Підзаряджаємо енергію - ОДНА фотка
  step1: {
    type: "single",
    photo: {
      src: "/photos/step1.jpg",
      alt: "Валік заряджається енергією",
    },
  },
  
  // Сторінка 4: Стиль на максимум - ДВІ фотки (до/після)
  step2: {
    type: "beforeAfter",
    before: {
      src: "/photos/step2-before.jpg",
      alt: "Валік до стилізації",
    },
    after: {
      src: "/photos/step2-after.jpg",
      alt: "Валік у стильному образі",
    },
  },
  
  // Сторінка 5: Харизма завантажується - ОДНА фотка
  step3: {
    type: "single",
    photo: {
      src: "/photos/step3.jpg",
      alt: "Харизматичний Валік",
    },
  },
  
  // Сторінка 6: Режим День Народження - ДВІ фотки (до/після)
  step4: {
    type: "beforeAfter",
    before: {
      src: "/photos/step4-before.jpg",
      alt: "Валік до святкового настрою",
    },
    after: {
      src: "/photos/step4-after.jpg",
      alt: "Валік у святковому настрої",
    },
  },
  
  // Сторінка 7: Збираємо команду - ОДНА фотка
  step5: {
    type: "single",
    photo: {
      src: "/photos/step5.jpg",
      alt: "Валік з друзями",
    },
  },
  
  // Сторінка 8: Фінальні штрихи - ДВІ фотки (до/після)
  step6: {
    type: "beforeAfter",
    before: {
      src: "/photos/step6-before.jpg",
      alt: "Валік майже готовий",
    },
    after: {
      src: "/photos/step6-after.jpg",
      alt: "Готовий Валік",
    },
  },
}

// Масив фото для зручного доступу по індексу
export const PHOTOS_ARRAY = [
  PHOTOS.step1,
  PHOTOS.step2,
  PHOTOS.step3,
  PHOTOS.step4,
  PHOTOS.step5,
  PHOTOS.step6,
]

// Перевірка чи фото існує (для fallback до placeholder)
export function getPhotoForStep(stepIndex: number): StepPhoto | null {
  return PHOTOS_ARRAY[stepIndex] || null
}

// Перевірка чи крок має дві фотографії
export function isBeforeAfter(photo: StepPhoto): photo is BeforeAfterPhoto {
  return photo.type === "beforeAfter"
}

// Перевірка чи крок має одну фотографію
export function isSinglePhoto(photo: StepPhoto): photo is SinglePhoto {
  return photo.type === "single"
}
