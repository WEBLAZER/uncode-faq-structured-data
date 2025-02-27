jQuery(document).ready(function($) {
    console.log('test');
    function generateFAQSchema() {
        const $faqContainer = $('.uncode-accordion');
        if ($faqContainer.length === 0) {
            return;
        }

        const $questions = $faqContainer.find('.panel-title a span');
        const $answers = $faqContainer.find('.panel-body .uncode_text_column');

        let faqList = [];

        $questions.each(function(index) {
            // Extract all raw text from each answer
            let answerText = $answers.eq(index).text().trim();

            faqList.push({
                "@type": "Question",
                "name": $(this).text().trim(),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answerText
                }
            });
        });

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqList
        };

        // Add JSON-LD to head
        const $script = $('<script>')
            .attr('type', 'application/ld+json')
            .text(JSON.stringify(faqSchema));
        $('head').append($script);
    }

    // Call function to generate JSON-LD
    generateFAQSchema();
});