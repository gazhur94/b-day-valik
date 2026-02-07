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
  step1: {
    type: "single",
    photo: {
      src: "/photos/step1.jpg",
      alt: "Валік заряджається енергією",
    },
  },
  
  step2: {
    type: "beforeAfter",
    before: {
      src: "/photos/step2-before.jpg",
      alt: "Валік з волоссям в носі",
    },
    after: {
      src: "/photos/step2-after.jpg",
      alt: "Валік без волосся в носі",
    },
  },
  
  step3: {
    type: "beforeAfter",
    before: {
      src: "/photos/step3-before.jpg",
      alt: "Валік з грубою шкірою",
    },
    after: {
      src: "/photos/step3-after.jpg",
      alt: "Валік з м'якою шкірою",
    },
  },
  
  step4: {
    type: "single",
    photo: {
      src: "/photos/step4.jpg",
      alt: "Додаємо любові",
    },
  },
  
  step5: {
    type: "single",
    photo: {
      src: "/photos/step5.jpg",
      alt: "Ще любові",
    },
  },
  
  step6: {
    type: "single",
    photo: {
      src: "/photos/step6.jpg",
      alt: "І ще трохи любові",
    },
  },

  step7: {
    type: "single",
    photo: {
      src: "/photos/step7.jpg",
      alt: "Любов на максимумі",
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
  PHOTOS.step7,
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
