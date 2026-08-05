import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL;

export function ServiceCard({ service }) {
    const navigate = useNavigate();
    const { user } = useAuth();

    const imageUrl = `${API_URL}/images/${service.imagen}`; 

    return (
        <Card className="overflow-hidden flex flex-col">
            <img
                src={imageUrl}
                alt={service.nombre}
                className="h-40 w-full object-cover"
                onError={(e) => {
        e.target.src = "https://placehold.co/400x300?text=Sin+imagen";
    }}
            />

            <CardContent className="p-4 flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{service.nombre}</h3>
                    <Badge variant={service.activo ? "default" : "destructive"}>
                        {service.activo ? "Activo" : "Inactivo"}
                    </Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.descripcion}
                </p>

                <div className="flex items-center justify-between text-sm font-medium">
                    <span>₡{Number(service.precioBase).toLocaleString()}</span>
                    <span>{service.duracionMinutos} min</span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => navigate(`/servicios/${service.id}`)}
                >
                    Ver detalle
                </Button>

                {user?.role === "Administrador" && (
                    <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => navigate(`/servicios/${service.id}/editar`)}
                    >
                        Editar
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

ServiceCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string,
        precioBase: PropTypes.string.isRequired,
        duracionMinutos: PropTypes.number.isRequired,
        imagen: PropTypes.string,
        activo: PropTypes.bool.isRequired,
        especialidadId: PropTypes.number,
        creadoEn: PropTypes.string,
        actualizadoEn: PropTypes.string,
    }).isRequired,
};