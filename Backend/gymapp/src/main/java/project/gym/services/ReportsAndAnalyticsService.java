package project.gym.services;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import project.gym.dao.IReportsAndAnalytics;
import project.gym.pojos.ReportsAndAnalytics;

import java.util.List;

	@Service
	public class ReportsAndAnalyticsService implements IReportsAndAnalyticsService {
		@Autowired
	    private final IReportsAndAnalytics reportsAndAnalyticsDAO;

	    
	    public ReportsAndAnalyticsService(IReportsAndAnalytics reportsAndAnalyticsDAO) {
	        this.reportsAndAnalyticsDAO = reportsAndAnalyticsDAO;
	    }

	    @Override
	    public ReportsAndAnalytics getReportById(Long reportId) {
	        return reportsAndAnalyticsDAO.findById(reportId).orElse(null);
	    }

	    @Override
	    public List<ReportsAndAnalytics> getAllReports() {
	        return reportsAndAnalyticsDAO.findAll();
	    }

	    @Override
	    public ReportsAndAnalytics saveReport(ReportsAndAnalytics report) {
	        return reportsAndAnalyticsDAO.save(report);
	    }

	    @Override
	    public void deleteReport(Long reportId) {
	        reportsAndAnalyticsDAO.deleteById(reportId);
	    }
	}

