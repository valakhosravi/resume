import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPdf = async (divId: string, pdfName: string) => {
  const element = document.getElementById(divId);

  if (!element) {
    console.error(`Element with id ${divId} not found.`);
    return;
  }

  try {
    const canvas = await html2canvas(element);
    const pdf = new jsPDF();
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );
    pdf.save(`${pdfName}.pdf`);
  } catch (error) {
    console.error("Error exporting to PDF:", error);
  }
};

export default exportToPdf;
