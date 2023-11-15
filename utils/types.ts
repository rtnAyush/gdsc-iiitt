export interface returnType {
	error: boolean;
	msg: string;
	data?: any;
}

export interface studentDataType {
	id: string;
	student_name: string;
	student_email: string;
	institution: string;
	enrolment_date_time: string;
	enrolment_status: string;
	google_cloud_skills_boost_profile_url: string;
	of_courses_completed: number;
	of_skill_badges_completed: number;
	of_gen_ai_game_completed: number;
	total_completions?: number;
	total_completions_of_both_pathways: string;
	redemption_status: string;
}
