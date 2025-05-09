import FormParamsReportContainer from "../../FormParamsReport/FormParamsReportContainer";
import FormParamsReportDateRange from "../../FormParamsReport/FormParamsReportDateRange";
import FormParamsReportDepartamento from "../../FormParamsReport/FormParamsReportDepartamento";
import FormParamsReportEstado from "../../FormParamsReport/FormParamsReportEstado";
import FormParamsReportFolioRange from "../../FormParamsReport/FormParamsReportFolioRange";
import FormParamsReportProveedor from "../../FormParamsReport/FormParamsReportProveedor";
import ReportLog from "../../logs/ReportLog";

function OrdenesDeCompraPage({ darkMode }: { darkMode: boolean }) {
    return (
        <main
            className={`overflow-auto h-full w-full flex gap-8  p-4 ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
            } duration-700`}
        >
            <FormParamsReportContainer TitleContainer="Filtrar por">
                <FormParamsReportFolioRange></FormParamsReportFolioRange>
                <FormParamsReportDateRange></FormParamsReportDateRange>
                <FormParamsReportProveedor></FormParamsReportProveedor>
                <FormParamsReportDepartamento></FormParamsReportDepartamento>
                <FormParamsReportEstado></FormParamsReportEstado>
            </FormParamsReportContainer>
            <ReportLog></ReportLog>     
        </main>
    );  
}

export default OrdenesDeCompraPage;
