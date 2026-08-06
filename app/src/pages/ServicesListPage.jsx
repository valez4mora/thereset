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
import { Plus, Search } from "lucide-react";
import { SearchInput } from "@/components/SearchInput";

export function ServicesListPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("");
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        let isMounted = true;

        async function fetchServices() {
            try {
                setLoading(true);
                const response = await servicesService();
                if (isMounted) setServices(response.data ?? []);
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

    const filteredAndSortedServices = useMemo(() => {
        if (!Array.isArray(services)) return [];

        const term = search.trim().toLowerCase();

        const filtered = term
            ? services.filter((s) => s.nombre.toLowerCase().includes(term))
            : services;

        const copyFiltered = [...filtered];

        switch (sortBy) {
            case "precio":
                return copyFiltered.sort((a, b) => Number(a.precioBase) - Number(b.precioBase));
            case "duracion":
                return copyFiltered.sort((a, b) => a.duracionMinutos - b.duracionMinutos);
            default:
                return copyFiltered;
        }
    }, [services, sortBy, search]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Services</h1>

                <div className="flex items-center gap-3 flex-wrap">
                    <SearchInput
                        name="search"
                        placeholder="Search Service..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        icon={<Search className="size-4" />}
                    />

                    <Select value={sortBy} onValueChange={setSortBy} className="h-12">
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Order by.." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">Order by..</SelectItem>
                            <SelectItem value="precio">Price</SelectItem>
                            <SelectItem value="duracion">Duration</SelectItem>
                        </SelectContent>
                    </Select>

                    {user?.role === "Administrador" && (
                        <Button onClick={() => navigate("/servicios/crear")}>
                            <Plus className="size-4 mr-1" />
                            New service
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

            {!loading && !error && filteredAndSortedServices.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    {search
                        ? `No services were found for "${search}".`
                        : "No services are registered."}
                </div>
            )}

            {!loading && !error && filteredAndSortedServices.length > 0 && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredAndSortedServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            )}
        </div>
    );
}