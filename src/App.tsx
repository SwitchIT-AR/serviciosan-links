import {Container, Title, Button, Center, SimpleGrid} from '@mantine/core';
import {spotlight, Spotlight, SpotlightActionData} from "@mantine/spotlight";
import {IconLink, IconSearch} from "tabler-icons";
import links from "./links.json"


const actions: SpotlightActionData[] = links.map((link, index) => ({
    id: `link-${index}`,
    label: link.label,
    description: link.url,
    onClick: () => window.open(link.url, '_blank'),
    leftSection: <IconLink size={20} stroke={1.5} />,
}));

export default function LandingLinks() {
    return (
        <Container size="lg" py="xl">
            <Title order={2} ta="center" mb="md">
                Accesos rápidos - Servicios Agua Negra
            </Title>
            <Center>
            <Button leftSection={<IconSearch />} radius={"xl"} variant={"outline"} ta={"center"} onClick={spotlight.open} mb="md">
                Buscar link
            </Button>
            </Center>
            <Spotlight
                actions={actions}
                scrollable
                maxHeight={450}
                nothingFound="No se encontró ningún acceso..."
                highlightQuery
                searchProps={{
                    leftSection: <IconSearch size={20} stroke={1.5} />,
                    placeholder: 'Buscar link...',
                }}
            />
            <SimpleGrid cols={2} >
                {links.map((link) => (

                    <Button component={'a'} variant={"outline"} color={link.color} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </Button>
                ))}
            </SimpleGrid>
        </Container>
    );
}
