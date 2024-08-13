<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>


<Accordion class="w-[80%] mx-auto mt-4">
    <AccordionItem>
        <span slot="header" class="md:text-xl lg:text-2xl">Address</span>
        <p class="font-mono text-sm md:text-lg lg:text-xl text-center mt-4">
            MQM International Secretariat (Temporary)
            <br>
            185 Whitchurch Lane
            <br>
            Edgware
            <br>
            Middlesex
            <br>
            HA8 6QT
            <br>
            United Kingdom
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header" class="md:text-xl lg:text-2xl">Email</span>
        <p class="text-center">
            <a  href="mailto:info@altafhussain90.org"
                class="font-mono text-sm md:text-lg lg:text-xl mt-4">
                info@altafhussain90.org
            </a>
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header" class="md:text-xl lg:text-2xl">Telephone</span>
        <p class="text-center">
            <a  href="tel:+44 20 8952 7300"
                class="font-mono text-sm md:text-lg lg:text-xl mt-4">
                +44 20 8952 7300
            </a>
        </p>
    </AccordionItem>
    <AccordionItem class="md:text-xl lg:text-2xl">
        <span slot="header">WhatsApp</span>
        <p class="text-center">
            <a  href="https://wa.me/447908510556"
                class="font-mono text-sm md:text-lg lg:text-xl mt-4">
                +44 79 0851 0556
            </a>
        </p>
    </AccordionItem>
</Accordion>
