"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { portfolio } from "@/data/portfolio"
import Link from "next/link"

const content = {
  es: {
    title: "Términos y Condiciones",
    updated: "Última actualización: junio 2025",
    back: "← Volver al inicio",
    sections: [
      {
        heading: "1. Aceptación de los términos",
        body: `Al contratar los servicios de ${portfolio.name} ("el Desarrollador"), el cliente acepta los presentes Términos y Condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le rogamos que no proceda con la contratación.`,
      },
      {
        heading: "2. Servicios",
        body: `El Desarrollador ofrece servicios de diseño web, desarrollo web, creación de landing pages, tiendas online y sistemas de reservas. Cada proyecto se desarrolla de forma completamente personalizada según los requerimientos, el estilo y los objetivos del cliente. Los ejemplos mostrados en el portafolio son referencias de posibilidades y no garantizan un resultado idéntico.`,
      },
      {
        heading: "3. Presupuesto y pago",
        body: `Todo proyecto requiere un presupuesto escrito acordado por ambas partes antes de iniciar el trabajo. El pago se divide en dos etapas: 50% al iniciar el proyecto y 50% al entregar el resultado final. El Desarrollador se reserva el derecho de pausar o cancelar el proyecto si un pago acordado no se recibe en el plazo establecido. Los precios son en dólares estadounidenses (USD) y no incluyen costos de terceros como dominios, hosting o licencias de software.`,
      },
      {
        heading: "4. Revisiones",
        body: `Cada proyecto incluye un número de rondas de revisión acordado en el presupuesto. Las revisiones adicionales fuera del alcance original se cotizarán por separado. Una "revisión" se define como ajustes menores al diseño o contenido existente; cambios de dirección o nuevos requerimientos pueden considerarse un nuevo proyecto.`,
      },
      {
        heading: "5. Propiedad intelectual",
        body: `Una vez realizado el pago completo, el cliente adquiere la propiedad total del diseño y código desarrollados específicamente para su proyecto. El Desarrollador retiene el derecho de mostrar el trabajo realizado en su portafolio y materiales de marketing, salvo acuerdo de confidencialidad por escrito. El cliente es responsable de contar con los derechos de uso sobre imágenes, textos, logos y cualquier otro material que proporcione.`,
      },
      {
        heading: "6. Responsabilidades del cliente",
        body: `El cliente se compromete a proporcionar toda la información, materiales y contenidos necesarios en los plazos acordados. Los retrasos causados por falta de respuesta o entrega de materiales por parte del cliente pueden extender los plazos de entrega sin responsabilidad para el Desarrollador.`,
      },
      {
        heading: "7. Confidencialidad",
        body: `El Desarrollador se compromete a mantener confidencial cualquier información sensible o estratégica que el cliente comparta durante el desarrollo del proyecto, y no la divulgará a terceros sin consentimiento expreso.`,
      },
      {
        heading: "8. Limitación de responsabilidad",
        body: `El Desarrollador no se hace responsable de pérdidas económicas, pérdida de datos, daños indirectos o consecuentes derivados del uso del sitio web entregado. La responsabilidad total del Desarrollador está limitada al monto total pagado por el proyecto en cuestión.`,
      },
      {
        heading: "9. Cancelación",
        body: `Si el cliente decide cancelar el proyecto tras el inicio del trabajo, el pago inicial del 50% no es reembolsable, ya que cubre el tiempo y los recursos invertidos hasta ese punto. Si el Desarrollador cancela el proyecto por causas imputables a él, se reembolsará el pago inicial íntegramente.`,
      },
      {
        heading: "10. Ley aplicable",
        body: `Estos Términos y Condiciones se rigen por las leyes del Estado de Florida, Estados Unidos. Cualquier disputa se resolverá preferentemente mediante acuerdo amistoso; en caso contrario, mediante arbitraje en el condado de Miami-Dade.`,
      },
      {
        heading: "11. Contacto",
        body: `Para cualquier consulta sobre estos términos, puedes escribirnos a ${portfolio.contact.email} o al ${portfolio.contact.phone}.`,
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    updated: "Last updated: June 2025",
    back: "← Back to home",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: `By engaging the services of ${portfolio.name} ("the Developer"), the client agrees to these Terms and Conditions in their entirety. If you do not agree with any of these terms, please do not proceed with the engagement.`,
      },
      {
        heading: "2. Services",
        body: `The Developer provides web design, web development, landing page creation, online stores, and booking system services. Each project is fully customized to the client's requirements, style, and goals. Examples shown in the portfolio are references of possibilities and do not guarantee an identical result.`,
      },
      {
        heading: "3. Pricing & Payment",
        body: `All projects require a written quote agreed upon by both parties before work begins. Payment is split into two stages: 50% upon project start and 50% upon final delivery. The Developer reserves the right to pause or cancel the project if an agreed payment is not received within the established timeframe. Prices are in US dollars (USD) and do not include third-party costs such as domains, hosting, or software licenses.`,
      },
      {
        heading: "4. Revisions",
        body: `Each project includes a number of revision rounds agreed upon in the quote. Additional revisions outside the original scope will be quoted separately. A "revision" is defined as minor adjustments to existing design or content; changes in direction or new requirements may be considered a new project.`,
      },
      {
        heading: "5. Intellectual Property",
        body: `Upon full payment, the client acquires full ownership of the design and code developed specifically for their project. The Developer retains the right to display the completed work in their portfolio and marketing materials, unless a written confidentiality agreement is in place. The client is responsible for having usage rights to any images, text, logos, or other materials they provide.`,
      },
      {
        heading: "6. Client Responsibilities",
        body: `The client agrees to provide all necessary information, materials, and content within the agreed timelines. Delays caused by the client's failure to respond or deliver materials may extend project deadlines without liability to the Developer.`,
      },
      {
        heading: "7. Confidentiality",
        body: `The Developer agrees to keep confidential any sensitive or strategic information shared by the client during the project, and will not disclose it to third parties without express consent.`,
      },
      {
        heading: "8. Limitation of Liability",
        body: `The Developer is not liable for financial losses, data loss, indirect, or consequential damages arising from the use of the delivered website. The Developer's total liability is limited to the total amount paid for the project in question.`,
      },
      {
        heading: "9. Cancellation",
        body: `If the client decides to cancel the project after work has begun, the initial 50% payment is non-refundable, as it covers time and resources invested up to that point. If the Developer cancels the project due to their own fault, the initial payment will be refunded in full.`,
      },
      {
        heading: "10. Governing Law",
        body: `These Terms and Conditions are governed by the laws of the State of Florida, United States. Any dispute will be resolved preferably by mutual agreement; otherwise, through arbitration in Miami-Dade County.`,
      },
      {
        heading: "11. Contact",
        body: `For any questions about these terms, you can reach us at ${portfolio.contact.email} or ${portfolio.contact.phone}.`,
      },
    ],
  },
}

export default function TermsPage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-block text-sm text-gray-400 hover:text-gray-900 transition-colors mb-10"
        >
          {tx.back}
        </Link>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-2">
          {tx.title}
        </h1>
        <p className="text-sm text-gray-400 mb-12">{tx.updated}</p>

        {/* Sections */}
        <div className="space-y-10">
          {tx.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-base font-semibold text-gray-900 mb-2">
                {section.heading}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* Bottom back link */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            {tx.back}
          </Link>
        </div>
      </div>
    </main>
  )
}
