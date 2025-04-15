import {Container, Grid, Paper, Title, Anchor, Button, Center} from '@mantine/core';
import {spotlight, Spotlight, SpotlightActionData} from "@mantine/spotlight";
import {IconLink, IconSearch} from "tabler-icons";

const links = [
    { label: 'Ministerio de Salud - Cartera de Prestadores', url: 'https://docs.google.com/spreadsheets/d/19Xfpe_NT6tTFT5twYjrDSF12u39jYhNCPvNdqX2T2u0/edit?gid=0#gid=0' },
    { label: 'Registro de Llamadas - Ministerio de Salud 2', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfVqzUCfvxc3Z9tCVizStY9eHLTKp6P6ly-Br57nnjoXBrfVQ/viewform?usp=sf_link' },
    { label: 'Registro de reclamos del BOT', url: 'https://docs.google.com/forms/d/1laFO410o-2Vr_NUq3l5D-NNdcFkJoTx3BTr-0bWJPGk/edit' },
    { label: 'INGRESO A ANDES', url: 'https://andes.sanjuan.gob.ar/' },
    { label: 'BOT-SALUD-PERIFERIA', url: 'https://bot.sanjuan.gob.ar/lite/turnos/?m=channel-web&v=Fullscreen&options=%7B%22hideWidget%22%3Atrue%2C%22config%22%3A%7B%22enableReset%22%3Atrue%2C%22enableTranscriptDownload%22%3Atrue%7D%7D' },
    { label: 'MAPA CENTRO DE SALUD - ANDES', url: 'https://centrosdesalud.sanjuan.gob.ar/' },
    { label: 'HOSPITAL RAWSON - CARTERA DE PRESTADORES', url: 'https://docs.google.com/spreadsheets/d/1flKF46Y-UmXYhdydWEtOk2N3UTVKPRF_ZSDFx49PEwA/edit?gid=0#gid=0' },
    { label: 'REGISTRO DE LLAMADOS HGR', url: 'https://forms.gle/CYnST3T2soVmG3328' },
    { label: 'PAGINA PARA VERIFICAR OBRA SOCIAL', url: 'https://servicioswww.anses.gob.ar/OOSS2/' },
    { label: 'HOSPITAL MARCIAL QUIROGA - CARTERA DE PRESTADORES', url: 'https://docs.google.com/spreadsheets/d/13zHZ2okDDUfeoqVHa53s35pshgzz5Zetl-1YhS3P1Nk/edit?gid=0#gid=0' },
    { label: 'REGISTRO DE LLAMADOS HMQ', url: 'https://forms.gle/BZFEvEhFeoxLzYYR8' },
    { label: 'REGISTRO DE GESTIONES ANDES - HMQ', url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOKtsP5R9KN59fwqfjeIVY5Kzx0UM5UtS4QbHfprywgPWoDg/formResponse' },
    { label: 'RENTAS', url: 'http://www.sanjuandgr.gov.ar' },
    { label: 'RENTAS: Registro de llamadas', url: 'https://docs.google.com/forms/d/e/1FAIpQLScy8dTYIgTpxRbrCyBAPJMrV_lLMMwblk_Zkxr9O5RQaYBfAQ/viewform' },
    { label: 'OBRA SOCIAL PROVINCIA', url: 'http://www.obrasocial.sanjuan.gov.ar/dos/' },
    { label: 'REGISTRO DE LLAMADAS DE OBRA SOCIAL PROVINCIA', url: 'https://docs.google.com/forms/d/141Ybj6tCZ6VHqJFbImLjKwfhw6-tUL0ZXoCdQuzrCAY/edit' },
    { label: 'CARGA DE BONOS DE CONSULTA OSP', url: 'http://www.dossanjuan.online/OspFacturar/Account/Login.aspx?ReturnUrl=%2fospfacturar' },
    { label: 'HISTORIAL DE MEDICAMENTOS OSP', url: 'http://www.dossanjuan.online/afiliados/Account/Login.aspx?ReturnUrl=%2fafiliados' },
    { label: 'FORMULARIO RECLAMOS OSP', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdVpSN12tWIrijTjmWTUOH_fMxNvflkAnUVOVK0vhf5-3eUuA/viewform?usp=sf_link' },
    { label: 'ENCUESTA OSP', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdut75Y13ku_DRZTYCSdg01gHdiFlphPTy3OEUauExkTAdE1A/viewform' },
    { label: 'VERIFICACIÓN VEHÍCULAR', url: 'https://www.verificacionsanjuan.com.ar/solicita_turno.php#step-1' },
    { label: 'TURNERO REGISTRO CIVIL', url: 'http://172.16.110.201:9090/adminpanel/schedlist' },
    { label: 'DEFENSA AL CONSUMIDOR', url: 'http://172.16.110.29:817' },
    { label: 'RECLAMOS TECNORED', url: 'https://online2.ispcube.com/login.php#' },
    { label: 'RECLAMOS DE ALTAS, CONSTANCIAS O SEGUIMIENTO 107', url: 'https://forms.gle/4SqN22js7Z2UK2So7' },
    { label: 'CARGA DE CONTACTO ESTRECHO', url: 'https://docs.google.com/forms/d/e/1FAIpQLScYqx9ld8-spNH1LcWrDigOQyb5iU5cApBGWJlJopbDAEwpzA/viewform' },
    { label: 'SOLICITUD DE ALTA DE AISLAMIENTO O CONSTANCIA DE AISLAMIENTO POR CONTACTO ESTRECHO', url: 'https://docs.google.com/forms/d/e/1FAIpQLScFLpIw2by-_ASLl9aACSaz3WeIsyS1ns2FghKeYN-j6O6aRA/viewform' },
    { label: 'BACKUPS DE RESULTADOS', url: 'https://docs.google.com/spreadsheets/d/1DEX7tQX27QKwGUcda6lla_W6WJfzqKOsU85tWFTAAXM/edit?ts=5fea2743#gid=942724063' },
    { label: 'RESULTADOS COVID-19', url: 'https://apisalud.sanjuan.gob.ar/resultadosWEB' },
    { label: 'UBICACION DE CENTROS DE HISOPADOS', url: 'https://www.geosanjuan.com.ar/cat/hospitales-atencion-de-la-salud/70-centros-de-testeo-covid19' },
    { label: 'REGISTRO DE PROTECCION INTEGRAL - 102', url: 'https://runmepi.sanjuan.gob.ar/run/login' },
    { label: 'LLAMADOS NO PERTINENTES 102', url: 'https://docs.google.com/forms/d/e/1FAIpQLSef4mXt827PJGp8t3eIuR_RQqs3lllyV8kzpfs6hPuWKRbb0Q/viewform?gxids=7628' },
    { label: 'GLPI (CIUDADANO DIGITAL)', url: 'https://soporte.sanjuan.gob.ar/glpi/' },
    { label: 'REGISTRO DE GESTIONES GLPI', url: 'https://forms.gle/Tk7Bi3TmQBb1AcEU9' },
    { label: 'REGISTRO DE GESTIONES BOTMAKER', url: 'https://forms.gle/zBZYh5bHfx6mBZW48' },
    { label: 'Sistema de Gestión Supercanal', url: 'https://siga3.supercanal.tv:8443/SIGA-MSA-SC/servlet/login' },
    { label: 'Mapa de Cobertura Supercanal', url: 'http://cobertura.supercanal.tv/pages/visualizacion.php' },
    { label: 'REGISTRO MINISTERIO DE PRODUCCIÓN Y DESARROLLO', url: 'https://forms.gle/oMPyzgmxBh8yYQFQ8' },
    { label: 'LINKS MINISTERIO DE PRODUCCIÓN Y DESARROLLO', url: 'https://docs.google.com/spreadsheets/d/16xUe42I3mIMiy15W3R9Y9bvMfzA6JZPGlQADkb-Axio/edit#gid=0' },
    { label: 'TURISMO - DRIVE CON INFORMACIÓN ACTUALIZADA', url: 'https://drive.google.com/drive/folders/1i5oZE2ZizjCZueaxmcDbsV3WnpvJSpbb' },
    { label: 'RED-TULUM - página oficial', url: 'https://www.redtulum.gob.ar/' },
    { label: 'RED-TULUM - aplicación oficial', url: 'https://moovitapp.com/san_juan-6137/poi/Boulevard%20Oeste%20181/Tu%20ubicaci%C3%B3n%20actual/es-419?customerId=NPIdiV-P9Gcj-pA7yOXVPg&fll=-31.587695_-68.558612&tll=-31.535297_-68.605166' },
    { label: 'RED-TULUM documento de las paradas con conexion del sistema', url: 'https://docs.google.com/spreadsheets/d/16Ms_Ked0kSkzpTCO-ksCjIe3ov_y-pOmzuc199exHzY/edit#gid=0' },
    { label: 'RED-TULUM formulario de sugerencias y reclamos', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfU8uPMMde-iL4o_i1g0tC2bd-RTZQ5R6OoasB-w4SdnAWs7w/viewform' }
];

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
            <Grid gutter="md">
                {links.map((link, index) => (
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
                        <Paper withBorder shadow="md" p="md" radius="md">
                            <Anchor href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </Anchor>
                        </Paper>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}
