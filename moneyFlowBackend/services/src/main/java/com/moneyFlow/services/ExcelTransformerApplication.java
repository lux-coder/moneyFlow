package com.moneyFlow.services;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ExcelTransformerApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(ExcelTransformerApplication.class, args);

		System.out.println("test");

		//FileInputStream file = new FileInputStream(new File("../../../../../moneyFlow.xlsx"));
		FileInputStream file = new FileInputStream(new File("C:\\Users\\lux-coder\\Projects\\moneyFlow\\moneyFlow.xlsx"));
		Workbook workbook = new XSSFWorkbook(file);

		Sheet sheet = workbook.getSheet("bilanca");

		Map<Integer, List<String>> data = new HashMap<>();
		int i = 0;

		for(Row row: sheet){
			data.put(i, new ArrayList<>());
			for(Cell cell: row){
				//System.out.println(cell);
				switch (cell.getCellType()) {
					case STRING: data.get(i).add(cell.getRichStringCellValue().getString()); break;
					case NUMERIC: data.get(i).add(cell.getNumericCellValue() + ""); break;
					case FORMULA: data.get(i).add(cell.getCellFormula() + ""); break;
					default: data.get(i).add(" ");
				}
			}
			i++;
		}

		Stream stream = Stream.of(data);
		stream.forEach(System.out::println);
	}

}
