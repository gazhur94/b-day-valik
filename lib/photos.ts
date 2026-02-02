/**
 * КОНФІГУРАЦІЯ ФОТОГРАФІЙ
 * 
 * Як додати свої фото:
 * 1. Додайте фотографії в папку /public/photos/
 * 2. Оновіть шляхи нижче відповідно до назв ваших файлів
 * 
 * Рекомендований розмір фото: 600x800px (співвідношення 3:4)
 * Формати: .jpg, .png, .webp
 */

export const PHOTOS = {
  // Сторінка 3: Підзаряджаємо енергію
  step1: {
    src: "/photos/step1.jpg",
    alt: "Валік заряджає енергію",
  },
  
  // Сторінка 4: Стиль на максимум
  step2: {
    src: "/photos/step2.jpg",
    alt: "Валік у стильному образі",
  },
  
  // Сторінка 5: Харизма завантажується
  step3: {
    src: "/photos/step3.jpg",
    alt: "Харизматичний Валік",
  },
  
  // Сторінка 6: Режим День Народження
  step4: {
    src: "/photos/step4.jpg",
    alt: "Валік у святковому настрої",
  },
  
  // Сторінка 7: Збираємо команду
  step5: {
    src: "/photos/step5.jpg",
    alt: "Валік з друзями",
  },
  
  // Сторінка 8: Фінальні штрихи
  step6: {
    src: "/photos/step6.jpg",
    alt: "Готовий Валік",
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
export function getPhotoForStep(stepIndex: number) {
  return PHOTOS_ARRAY[stepIndex] || null
}
