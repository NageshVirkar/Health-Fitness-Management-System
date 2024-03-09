package project.gym.services;


import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.lowagie.text.Chunk;
import com.lowagie.text.Document;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

@Service
public class PdfService {
	
	private Logger logger = LoggerFactory.getLogger(PdfService.class);
  public ByteArrayInputStream createPdf()
  {
	  logger.info("Create PDF started");
	  String title="Welcome to Muscle Factory Health and Fitness";
	  String content="We provide all type of Services here and help to fit you as your choice";
	  
	  ByteArrayOutputStream out = new ByteArrayOutputStream();
	  Document document = new Document();
	  PdfWriter.getInstance(document, out);
	  document.open();
	  Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD,20);
	  Paragraph titlePara= new Paragraph(title,titleFont);
	  titlePara.setAlignment(Element.ALIGN_CENTER);
	  document.add(titlePara);
	  Font paraFont =FontFactory.getFont(FontFactory.HELVETICA,18);
	  Paragraph paragraph= new Paragraph(content,paraFont);
	  paragraph.add(new Chunk("wow this text is added after adding paragraph"));
	  document.add(paragraph);
	  document.close();
	  
	  return new ByteArrayInputStream(out.toByteArray());
  }
}
