import supabase from './supabase';

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

  // Map DB columns to frontend structure and convert image paths to public URLs
  return data.map((evt) => {
    // let imageUrl = null;

    // if (evt.image) {
    //   // Generate public URL from Supabase storage
    //   const { publicUrl, error: urlError } = supabase
    //     .storage
    //     .from('event-images') // your bucket name
    //     .getPublicUrl(evt.image);

    //   if (urlError) {
    //     console.error('Error getting public URL:', urlError);
    //   } else {
    //     imageUrl = publicUrl;
    //   }
    // }

    return {
      id: evt.id,
      name: evt.event_name,
      conductedBy: evt.event_conductedby,
      description: evt.description,
      date: evt.event_date,
      time: `${evt.start_time} - ${evt.end_time}`,
      location: evt.venue,
      image: evt.image_url, // public URL
      category: evt.event_type,
      glink: evt.form_link,
    };
  });
}
