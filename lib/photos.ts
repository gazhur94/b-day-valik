/**
 * КОНФІГУРАЦІЯ ФОТОГРАФІЙ
 * 
 * Як додати свої фото:
 * 1. Додайте фотографії в папку /public/photos/
 * 2. Для кожного кроку є ДВІ фотографії: "before" (до) та "after" (після)
 * 3. Назви файлів: step1-before.jpg, step1-after.jpg, step2-before.jpg, step2-after.jpg і т.д.
 * 
 * Рекомендований розмір фото: 600x800px (співвідношення 3:4)
 * Формати: .jpg, .png, .webp
 */

export interface StepPhoto {
  before: {
    src: string
    alt: string
  }
  after: {
    src: string
    alt: string
  }
}

export const PHOTOS: Record<string, StepPhoto> = {
  // Сторінка 3: Підзаряджаємо енергію
  step1: {
    before: {
      src: "/photos/step1-before.jpg",
      alt: "Валік без енергії",
    },
    after: {
      src: "/photos/step1-after.jpg",
      alt: "Валік заряджений енергією",
    },
  },
  
  // Сторінка 4: Стиль на максимум
  step2: {
    before: {
      src: "/photos/step2-before.jpg",
      alt: "Валік до стилізації",
    },
    after: {
      src: "/photos/step2-after.jpg",
      alt: "Валік у стильному образі",
    },
  },
  
  // Сторінка 5: Харизма завантажується
  step3: {
    before: {
      src: "/photos/step3-before.jpg",
      alt: "Валік до харизми",
    },
    after: {
      src: "/photos/step3-after.jpg",
      alt: "Харизматичний Валік",
    },
  },
  
  // Сторінка 6: Режим День Народження
  step4: {
    before: {
      src: "/photos/step4-before.jpg",
      alt: "Валік до святкового настрою",
    },
    after: {
      src: "/photos/step4-after.jpg",
      alt: "Валік у святковому настрої",
    },
  },
  
  // Сторінка 7: Збираємо команду
  step5: {
    before: {
      src: "/photos/step5-before.jpg",
      alt: "Валік один",
    },
    after: {
      src: "/photos/step5-after.jpg",
      alt: "Валік з друзями",
    },
  },
  
  // Сторінка 8: Фінальні штрихи
  step6: {
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
