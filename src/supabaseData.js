import  supabase  from './supabase';

// Fetch all events from Supabase
export async function fetchEvents() {
  const { data, error } = await supabase
    .from('event_details') // your table name
    .select('*')
    .order('event_date', { ascending: true }); // optional: order by date

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }

  // Map DB columns to frontend structure
  return data.map((evt) => ({
    id: evt.id,
    name: evt.event_name,
    conductedBy: evt.event_conductedby,
    description: evt.description,
    date: evt.event_date,
    time: `${evt.start_time} - ${evt.end_time}`,
    location: evt.venue,
    image: evt.image, // assuming stored URL
    category: evt.event_type,
    glink: evt.form_link,
  }));
}
