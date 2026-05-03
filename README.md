# Ren Ito Arq - Official Website

This repository contains the official, modernized codebase for the Ren Ito Architectural Studio website ([ren-ito.com](https://www.ren-ito.com/)). It represents a complete refactor of the original studio's digital presence, leveraging a high-performance stack to match the studio's minimalist and precise architectural philosophy.

## Technical Architecture

The application is built with a focus on scalability and performance, utilizing the latest web technologies:

- **Framework**: Next.js 15 (App Router) for optimized server-rendering and routing.
- **Language**: TypeScript for strict type safety and maintainable code.
- **Animations**: Framer Motion for sophisticated, fluid UI transitions and scroll-based reveals.
- **Scrolling**: Lenis for a consistent smooth-scrolling experience across all browsers.
- **Data Layer**: Prisma ORM with a service-based architecture, decoupling data logic from the presentation layer.
- **Styling**: Vanilla CSS with a centralized CSS Variable system for maximum design control without the overhead of utility frameworks.
- **Optimization**: Dynamic code splitting, Next.js Image optimization, and comprehensive SEO metadata integration.
- **Containerization**: Multi-stage Docker configuration for production-ready deployments.

## Development Principles

The codebase follows professional engineering standards:
- **Feature-Based Structure**: Components are organized by their role (Base, Common, Sections) to ensure a scalable directory hierarchy.
- **Resilient UI**: Implementation of React Error Boundaries and Loading Skeletons for a graceful user experience during asynchronous operations.
- **Performance First**: Utilizing Server Components to minimize client-side JavaScript execution.

---

# Ren Ito Arq - Resmi Web Sitesi

Bu depo, Ren Ito Mimarlık Ofisi'nin ([ren-ito.com](https://www.ren-ito.com/)) resmi ve modernize edilmiş kod tabanını içermektedir. Stüdyonun minimalist ve hassas mimari felsefesine uyum sağlamak amacıyla, orijinal dijital varlığın yüksek performanslı teknolojilerle tamamen yeniden yapılandırılmış halini temsil eder.

## Teknik Mimari

Uygulama, ölçeklenebilirlik ve performans odaklı, en güncel teknolojiler kullanılarak inşa edilmiştir:

- **Framework**: Optimize edilmiş sunucu taraflı render ve yönlendirme için Next.js 15 (App Router).
- **Dil**: Tip güvenliği ve sürdürülebilir kod yapısı için TypeScript.
- **Animasyonlar**: Sofistike UI geçişleri ve kaydırma tabanlı animasyonlar için Framer Motion.
- **Kaydırma**: Tüm tarayıcılarda tutarlı ve pürüzsüz bir kaydırma deneyimi için Lenis.
- **Veri Katmanı**: Veri mantığını sunum katmanından ayıran, servis tabanlı mimariye sahip Prisma ORM.
- **Stil**: Tasarım üzerinde tam kontrol sağlayan, merkezi CSS değişken sistemine sahip Vanilla CSS.
- **Optimizasyon**: Dinamik kod bölme (code splitting), Next.js görsel optimizasyonu ve kapsamlı SEO metadata entegrasyonu.
- **Konteynerizasyon**: Prodüksiyon ortamına hazır dağıtımlar için çok aşamalı (multi-stage) Docker yapılandırması.

## Geliştirme Prensipleri

Kod tabanı profesyonel mühendislik standartlarını takip eder:
- **Özellik Tabanlı Yapı**: Bileşenler, ölçeklenebilir bir dizin hiyerarşisi sağlamak için rollerine göre (Base, Common, Sections) organize edilmiştir.
- **Dayanıklı UI**: Asenkron işlemler sırasında sorunsuz bir kullanıcı deneyimi için React Error Boundary ve Loading Skeleton yapılarının uygulanması.
- **Performans Odaklı**: İstemci tarafındaki JavaScript yürütme yükünü minimize etmek için Sunucu Bileşenlerinin (Server Components) etkin kullanımı.
