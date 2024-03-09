package project.gym.services;

import java.util.List;

import project.gym.pojos.ReportsAndAnalytics;

public interface IReportsAndAnalyticsService {
	ReportsAndAnalytics getReportById(Long reportId);

    List<ReportsAndAnalytics> getAllReports();

    ReportsAndAnalytics saveReport(ReportsAndAnalytics report);

    void deleteReport(Long reportId);
}
