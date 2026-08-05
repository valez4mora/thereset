import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { servicesService } from "@/services/servicesService";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { Plus } from "lucide-react";

export function ServicesListPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("nombre");

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        let isMounted = true;

        async function fetchServices() {
            try {
                setLoading(true);
                const response = await servicesService();
                if (isMounted) setServices(response.data);
            } catch (err) {
                if (isMounted) setError(err.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchServices();
        return () => {
            isMounted = false;
        };
    }, []);

    const sortedServices = useMemo(() => {
        const copy = [...services];
        switch (sortBy) {
            case "precio":
                return copy.sort((a, b) => Number(a.precioBase) - Number(b.precioBase));
            case "duracion":
                return copy.sort((a, b) => a.duracionMinutos - b.duracionMinutos);
            case "nombre":
            default:
                return copy.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
    }, [services, sortBy]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <h1 className="text-2xl font-semibold">Servicios</h1>

                <div className="flex items-center gap-3">
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Ordenar por" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="nombre">Nombre</SelectItem>
                            <SelectItem value="precio">Precio</SelectItem>
                            <SelectItem value="duracion">Duración</SelectItem>
                        </SelectContent>
                    </Select>

                    {user?.role === "Administrador" && (
                        <Button onClick={() => navigate("/servicios/crear")}>
                            <Plus className="size-4 mr-1" />
                            Nuevo servicio
                        </Button>
                    )}
                </div>
            </div>

            {loading && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className="h-64 w-full rounded-xl" />
                    ))}
                </div>
            )}

            {!loading && error && (
                <div className="text-center py-10 text-destructive">
                    <p>Ocurrió un error al cargar los servicios.</p>
                    <p className="text-sm text-muted-foreground">{error}</p>
                </div>
            )}

            {!loading && !error && sortedServices.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    No hay servicios registrados.
                </div>
            )}

            {!loading && !error && sortedServices.length > 0 && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sortedServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            )}
        </div>
    );
}