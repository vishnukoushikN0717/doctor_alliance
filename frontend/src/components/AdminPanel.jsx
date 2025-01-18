// File: frontend/src/components/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/Supabase.jsx';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase
                .from('users')
                .select('*');

            if (error) {
                console.error('Error fetching users:', error.message);
                return;
            }

            setUsers(data);
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-panel">
            <input
                type="text"
                className="search-input"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="users-list">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="user-item">
                        <div className="user-info">
                            <span className="user-name">{user.name}</span>
                            <span className="user-email">{user.email}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;