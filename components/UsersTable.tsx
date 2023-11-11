import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: String,
  student_name: String,
  student_email: String,
  institution: String,
  enrolment_date_time: String,
  enrolment_status: String,
  google_cloud_skills_boost_profile_url: String,
  of_courses_completed: Number,
  of_skill_badges_completed: Number,
  of_genai_game_completed: Number,
  total_completions_of_both_pathways: String,
  redemption_status: String
}

export default function UsersTable({ users }: { users: User[] }) {



  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>{user.student_name}</TableCell>
            <TableCell>
              <Text>{user.institution}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.student_email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
